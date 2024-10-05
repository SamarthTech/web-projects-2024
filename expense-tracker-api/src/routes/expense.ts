import { Router } from "express";
import authMiddleware from "../middleware/auth";
import { PrismaClient, categories } from "../imports";
const router = Router();
const prisma = new PrismaClient();
router.get("/expense", authMiddleware, async (req, res) => {
  // Lists all the expenses of the logged-in user, with options for filtering by date ranges.
  //     Filters:
  // Past week: GET /expenses?filter=past_week
  // Last month: GET /expenses?filter=last_month
  // Last 3 months: GET /expenses?filter=last_3_months
  // Custom Date Range: GET /expenses?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD
  const { filter, start_date, end_date } = req.query as {
    filter: string;
    start_date?: string;
    end_date?: string;
  };
  const userId = req.userId;
  if (!userId) {
    return;
  }
  let expenses;
  const filters: { [key: string]: () => Date } = {
    past_week: () => new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    last_month: () => new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    last_3_months: () => new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
  };
  //   console.log(filters[filter])
  if (filters[filter]) {
    expenses = await prisma.expenses.findMany({
      where: {
        userId,
        date: {
          gte: filters[filter](),
        },
      },
    });

    res.status(201).json({
      expenses,
    });
  }
  if (start_date && end_date) {
    expenses = await prisma.expenses.findMany({
      where: {
        date: {
          gte: new Date(start_date),
          lte: new Date(end_date),
        },
      },
    });

    res.status(201).json({
      expenses,
    });
  } else {
    res.status(400).json({
      message: "Invalid Filtering",
    });
  }
});
router.post("/expense", authMiddleware, async (req, res) => {
  // Add a new expense entry.
  const { title, amount, category, date, description } = req.body;
  if(!categories.includes(category)){
    res.status(400).json({
        message: "Invalid Category"
    })
    return;
  }
  const userId = req.userId;
  if (!userId) {
    return;
  }
  try {
    const result = await prisma.expenses.create({
      data: {
        title,
        amount,
        category,
        date,
        description,
        userId,
      },
    });
    res.status(201).json({
      message: "Expense Created",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to create expense",
    });
  }
});
router.put("/expenses/:id", authMiddleware, async (req, res) => {
  const id = Number(req.params.id);
  const { title, amount, category, date, description } = req.body;
  if(!categories.includes(category)){
    res.status(400).json({
        message: "Invalid Category"
    })
    return;
  }
  try {
    const result = await prisma.expenses.updateMany({
      where: {
        id,
      },
      data: {
        title,
        amount,
        category,
        date,
        description,
      },
    });
    res.status(201).json({
      message: "Expense update",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to update expense",
    });
  }
});
router.delete("/expenses/:id", authMiddleware, async (req, res) => {
  const id = Number(req.params.id);
  try {
    const result = await prisma.expenses.delete({
      where: {
        id,
      },
    });
    res.status(201).json({
      message: "Expense deleted",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to delete expense",
    });
  }
});
export default router;
