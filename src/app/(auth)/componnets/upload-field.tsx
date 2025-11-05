"use client";
import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import {
  Upload,
  Video,
  Image as ImageIcon,
  FileText,
  GraduationCap,
} from "lucide-react";

interface UploadFieldProps {
  id: string;
  label: string;
  placeholder: string;
  accept?: string;
  icon?: "video" | "image" | "academic" | "file" | "default";
  onChange?: (file: File) => void;
  required?: boolean;
}

const iconMap = {
  video: Video,
  image: ImageIcon,
  file: FileText,
  academic: GraduationCap,
  default: Upload,
};

const UploadField: React.FC<UploadFieldProps> = ({
  id,
  label,
  placeholder,
  accept = "*",
  icon = "default",
  onChange,
  required,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const Icon = iconMap[icon];

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onChange) onChange(file);
  };

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-sm text-brandBlack">
        {label}
        {required && <span className="text-sm text-[#D9534F]">*</span>}
      </label>

      <div
        onClick={handleClick}
        className="w-full h-10 rounded-[20px] border flex items-center gap-2 px-4 cursor-pointer hover:bg-gray-50 transition"
      >
        <Icon className="w-5 h-5 text-[#565D6D]" />
        <p className="text-sm text-[#565D6D] truncate">{placeholder}</p>
      </div>

      <Input
        ref={fileInputRef}
        id={id}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadField;
