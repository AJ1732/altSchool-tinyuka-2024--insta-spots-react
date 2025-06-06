import { useRef } from "react";

export function useDialog() {
  const dialogRef = useRef(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return { dialogRef, open, close };
}
