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


export interface CustomTableMeta  {
  onDelete: (row: DataApi) => void;
  onEdit: (row:DataApi) => void;
};

export type FormProps={
  data:DataApi[],
  error:unknown
}