"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/Button";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1200);
    return () => window.clearTimeout(t);
  }, [copied]);

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
        } catch {
          setCopied(false);
        }
      }}
      aria-label="Copy email address"
    >
      {copied ? (
        <>
          Copied <Check className="h-4 w-4" aria-hidden />
        </>
      ) : (
        <>
          Copy email <Copy className="h-4 w-4" aria-hidden />
        </>
      )}
    </Button>
  );
}
