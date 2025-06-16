import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type BreadcrumbChallengesProps = {
  currentPage: string;
};

export function BreadcrumbChallenges({ currentPage }: BreadcrumbChallengesProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1">
            <BreadcrumbEllipsis className="size-4" />
            <span className="sr-only">Toggle menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              <Link href="/1">1</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/2">2</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/3">3</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {currentPage && currentPage.length > 0 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
