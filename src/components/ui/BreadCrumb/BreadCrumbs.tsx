import Link from "next/link";
import React from "react";
import { BreadcrumbItem } from "reactstrap";

export default function BreadCrumbs({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="page-title-right">
      <ol className="breadcrumb m-0">
        <BreadcrumbItem style={{ fontWeight: "700" }}>
          <Link href={href}>{title}</Link>
        </BreadcrumbItem>
      </ol>
    </div>
  );
}
