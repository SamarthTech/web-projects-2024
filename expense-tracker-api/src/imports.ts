import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import zod from 'zod'
import { PrismaClient } from '@prisma/client';
import categories from './utils/category';
export{
    express,
  cors,
  morgan,
  dotenv,
  jwt,
  bcrypt,
  zod,
  PrismaClient,
  categories
}