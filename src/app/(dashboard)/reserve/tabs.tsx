"use client";
import React from "react";
import { NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { useRouter, useSearchParams } from "next/navigation";

export default function Tabs() {
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("step") || 1;
  const { push } = useRouter();

  return (
    <div className="steps clearfix">
      <ul>
        {tabs.map((item) => (
          <NavItem
            key={item.id}
            className={classnames({ current: +activeTab === item.id })}
          >
            <NavLink
              className={classnames({ current: +activeTab === item.id })}
              onClick={() => {
                push(`/reserve?step=${item.id}`);
              }}
            >
              <span className="number">{item.id}.</span> {item.title}
            </NavLink>
          </NavItem>
        ))}
      </ul>
    </div>
  );
}

const tabs = [
  { title: "انتخاب اتاق", id: 1 },
  { title: "مهمان اصلی", id: 2 },
  { title: "همراهان", id: 3 },
  { title: "تایید پرداخت", id: 4 },
];
