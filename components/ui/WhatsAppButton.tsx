import { LinkButton } from "@/components/ui/buttons/LinkButton";
import { contactUrls } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

type WhatsAppButtonProps = {
  children: string;
  variant?: "light" | "dark";
};

export function WhatsAppButton({
  children,
  variant = "light",
}: WhatsAppButtonProps) {
  return (
    <LinkButton
      href={contactUrls.whatsapp}
      external
      variant={variant === "light" ? "light" : "outline"}
      text={children}
    >
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </LinkButton>
  );
}
