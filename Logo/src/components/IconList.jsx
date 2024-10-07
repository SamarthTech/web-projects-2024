import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Smile, icons } from "lucide-react";
import { iconsList } from "@/constants/icons";

const IconList = ({ selectedIcon }) => {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  const [openDialog, setOpenDialog] = useState(false);
  const Icon = ({ name, size, color }) => {
    const LucideIcon = icons[name];
    if (!LucideIcon) {
      return;
    }
    return <LucideIcon color={color} size={size} />;
  };
  return (
    <div>
      <label>Icon</label>
      <div
        onClick={() => setOpenDialog(true)}
        className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px]  flex items-center justify-center my-2"
      >
        <Icon name={icon} color={`#000`} size={20} />
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pic your favourite icon</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 overflow-auto h-[300px]">
                {[
                  "Accessiblity",
                  "Activity",
                  "AlarmClock",
                  "Album",
                  "AlarmClockOff",
                  "AlignLeft",
                  "Antenna",
                  "Aperture",
                  "AlignLeft",
                  "AlignRight",
                ].map((icon, index) => (
                  <div
                    className="border-3 p-3 flex rounded-sm items-center justify-center cursor-pointer"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);

                      setIcon(icon);
                    }}
                  >
                    <Icon name={icon} color={`#000`} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;
