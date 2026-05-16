"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui";

export function ToastTest() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Success Toast", {
            description: "This is a success message.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Error Toast", {
            description: "Something went wrong.",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Info Toast", {
            description: "Here is some information.",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Warning Toast", {
            description: "Be careful with this action.",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          const promise = new Promise((resolve) => setTimeout(resolve, 2000));
          toast.promise(promise, {
            loading: "Loading...",
            success: "Data loaded successfully!",
            error: "Failed to load data",
          });
        }}
      >
        Promise
      </Button>
    </div>
  );
}
