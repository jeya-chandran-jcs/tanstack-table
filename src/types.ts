import type { SetStateAction } from "react";

export type DataApi={
    id:number | string,
    name:string,
    description:string
}

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  data: Partial<DataApi> | null;
  onChange:React.Dispatch<SetStateAction<Partial<DataApi> | null>>;
}


export type CustomTableMeta = {
  onDelete: (row: Partial<DataApi>) => void;
  onEdit: (row: Partial<DataApi>) => void;
};