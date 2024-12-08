const menuItems = [
  {
    id: "menu",
    label: "منو",
    isHeader: true,
  },
  {
    id: "dashboard",
    label: "داشبورد",
    icon: "mdi-home-variant-outline",
    link: "/dashboard",
    badge: 3,
    badgecolor: "bg-primary",
  },
  {
    id: "calendar",
    label: "تقویم",
    icon: "mdi-calendar-outline",
    link: "/calendar",
  },
  {
    id: "email",
    novidade: false,
    label: "ایمیل",
    icon: "mdi mdi-email-outline",
    link: "/#",
    subItems: [
      {
        id: "inbox",
        label: "ورودی",
        link: "/inbox",
        parentId: "email",
      },
      {
        id: "reademail",
        label: "خواندن ایمیل",
        link: "/read-email",
        parentId: "email",
      },
      {
        id: "composeemail",
        label: "نوشتن ایمیل",
        link: "/compose-email",
        parentId: "email",
      },
    ],
  },
  {
    id: "pages",
    label: "صفحات",
    isHeader: true,
  },
  {
    id: "auth",
    novidade: false,
    label: "احراز هویت",
    icon: "mdi mdi-account-circle-outline",
    link: "/#",
    subItems: [
      {
        id: "login",
        label: "ورود",
        link: "/auth-login",
        parentId: "auth",
      },
      {
        id: "register",
        label: "ثبت نام",
        link: "/auth-register",
        parentId: "auth",
      },
      {
        id: "recoverpw",
        label: "بازیابی رمز عبور",
        link: "/auth-recoverpw",
        parentId: "auth",
      },
      {
        id: "lockscreen",
        label: "صفحه قفل",
        link: "/auth-lock-screen",
        parentId: "auth",
      },
    ],
  },
  {
    id: "utility",
    novidade: false,
    label: "سودمند",
    icon: "mdi mdi-format-page-break",
    link: "/#",
    subItems: [
      {
        id: "staterpage",
        label: "صفحه شروع",
        link: "/pages-starter",
        parentId: "utility",
      },
      {
        id: "maintenance",
        label: "نگهداری",
        link: "/pages-maintenance",
        parentId: "utility",
      },
      {
        id: "comingsoon",
        label: "به زودی",
        link: "/pages-comingsoon",
        parentId: "utility",
      },
      {
        id: "timeline",
        label: "خط زمانی",
        link: "/pages-timeline",
        parentId: "utility",
      },
      {
        id: "faq",
        label: "سوالات متداول",
        link: "/pages-faqs",
        parentId: "utility",
      },
      {
        id: "pricing",
        label: "قیمت گذاری",
        link: "/pages-pricing",
        parentId: "utility",
      },
      {
        id: "error404",
        label: "ارور 404",
        link: "/pages-404",
        parentId: "utility",
      },
      {
        id: "error500",
        label: "ارور 500",
        link: "/pages-500",
        parentId: "utility",
      },
    ],
  },
  {
    id: "components",
    label: "اجزاء",
    isHeader: true,
  },
  {
    id: "uielements",
    novidade: false,
    label: "عناصر رابط کاربری",
    icon: "mdi mdi-briefcase-variant-outline",
    link: "/#",
    subItems: [
      {
        id: "alerts",
        label: "هشدار ها",
        link: "/ui-alerts",
        parentId: "uielements",
      },
      {
        id: "badge",
        label: "نشان",
        link: "/ui-badge",
        parentId: "uielements",
      },
      {
        id: "Breadcrumb",
        label: "Breadcrumb منو ",
        link: "/ui-breadcrumb",
        parentId: "uielements",
      },
      {
        id: "buttons",
        label: "دکمه ها",
        link: "/ui-buttons",
        parentId: "uielements",
      },
      {
        id: "cards",
        label: "کارت ها",
        link: "/ui-cards",
        parentId: "uielements",
      },
      {
        id: "carousel",
        label: "اسلایدر",
        link: "/ui-carousel",
        parentId: "uielements",
      },
      {
        id: "dropdowns",
        label: "لیست کشویی",
        link: "/ui-dropdowns",
        parentId: "uielements",
      },
      {
        id: "grid",
        label: "شبکه بندی",
        link: "/ui-grid",
        parentId: "uielements",
      },
      {
        id: "images",
        label: "تصاویر",
        link: "/ui-images",
        parentId: "uielements",
      },
      {
        id: "lightbox",
        label: "جعبه روشن",
        link: "/ui-lightbox",
        parentId: "uielements",
      },
      {
        id: "modals",
        label: "مودال ها",
        link: "/ui-modals",
        parentId: "uielements",
      },
      {
        id: "offcanvas",
        label: "Offcanvas منو",
        link: "/ui-offcanvas",
        parentId: "uielements",
      },
      {
        id: "rangeslider",
        label: "لغزنده برد",
        link: "/ui-rangeslider",
        parentId: "uielements",
      },
      {
        id: "sessiontimeout",
        label: "پایان جلسه",
        link: "/ui-sessiontimeout",
        parentId: "uielements",
      },
      {
        id: "pagination",
        label: "صفحه بندی",
        link: "/ui-pagination",
        parentId: "uielements",
      },
      {
        id: "progressbars",
        label: "نوارهای پیشرفت",
        link: "/ui-progressbars",
        parentId: "uielements",
      },
      {
        id: "placeholders",
        label: "انواع Placeholders",
        link: "/ui-placeholders",
        parentId: "uielements",
      },
      {
        id: "sweet-alert",
        label: "هشدار 2",
        link: "/ui-sweet-alert",
        parentId: "uielements",
      },
      {
        id: 84,
        label: "زبانه ها و آکاردئون ها",
        link: "/ui-tabs-accordions",
        parentId: "uielements",
      },
      {
        id: 85,
        label: "تایپوگرافی",
        link: "/ui-typography",
        parentId: "uielements",
      },
      {
        id: "toasts",
        label: "توست ها",
        link: "/ui-toasts",
        parentId: "uielements",
      },
      {
        id: "video",
        label: "ویدیو ها",
        link: "/ui-video",
        parentId: "uielements",
      },
      {
        id: "popovers",
        label: "پاپاور ها",
        link: "/ui-popovers",
        parentId: "uielements",
      },
      {
        id: "rating",
        label: "رتبه بندی",
        link: "/ui-rating",
        parentId: "uielements",
      },
    ],
  },
  {
    id: "forms",
    novidade: false,
    label: "Forms",
    icon: "mdi mdi-eraser-variant",
    badge: 8,
    badgecolor: "bg-danger",
    link: "/#",
    subItems: [
      {
        id: "form-elements",
        label: "عناصر فرم",
        link: "/form-elements",
        parentId: "forms",
      },
      {
        id: "form-validation",
        label: "اعتبار سنجی فرم",
        link: "/form-validation",
        parentId: "forms",
      },
      {
        id: "form-advanced",
        label: "فرم پیشرفته",
        link: "/form-advanced",
        parentId: "forms",
      },
      {
        id: "form-editor",
        label: "ویرایشگر فرم",
        link: "/form-editor",
        parentId: "forms",
      },
      {
        id: "form-uploads",
        label: "آپلودهای فرم",
        link: "/form-uploads",
        parentId: "forms",
      },
      {
        id: "form-editors",
        label: "فرم X قابل ویرایش",
        link: "/form-editors",
        parentId: "forms",
      },
      {
        id: "form-wizard",
        label: "فرم Wizard",
        link: "/form-wizard",
        parentId: "forms",
      },
      {
        id: "form-mask",
        label: "فرم ماسک",
        link: "/form-mask",
        parentId: "forms",
      },
    ],
  },

  {
    id: "tables",
    novidade: false,
    label: "جدول ها",
    icon: "mdi-table ",
    link: "/#",
    subItems: [
      {
        id: "tables-basic",
        label: "جدول پایه",
        link: "/tables-basic",
        parentId: "tables",
      },
      {
        id: "table-datatable",
        label: "جدول اطلاعات",
        link: "/table-datatable",
        parentId: "tables",
      },
      {
        id: "tables-advanced",
        label: "جدول واکنش گرا",
        link: "/tables-advanced",
        parentId: "tables",
      },
      {
        id: "table-editable",
        label: "جدول قابل ویرایش",
        link: "/table-editable",
        parentId: "tables",
      },
    ],
  },
  {
    id: "charts",
    novidade: false,
    label: "نمودار ها",
    icon: "mdi mdi-poll ",
    link: "/#",
    subItems: [
      {
        id: "apexcharts",
        label: "Apex نمودار های",
        link: "/chart-apexcharts",
        parentId: "charts",
      },
      {
        id: "chartjs",
        label: "نمودار Js",
        link: "/chart-chartjscharts",
        parentId: "charts",
      },
      {
        id: "recharts",
        label: "RE نمودار",
        link: "/chart-floatcharts",
        parentId: "charts",
      },
      {
        id: "jknobcharts",
        label: "Jquery Knob نمودار",
        link: "/chart-jknobcharts",
        parentId: "charts",
      },
      {
        id: "jknobcharts",
        label: "Sparkline نمودار",
        link: "/chart-sparklinecharts",
        parentId: "charts",
      },
    ],
  },
  {
    id: "icons",
    novidade: false,
    label: "آیکون ها",
    icon: "mdi-brush ",
    link: "/#",
    subItems: [
      {
        id: "remixicon",
        label: "Remix آیکون های ",
        link: "/icon-remixicon",
        parentId: "icons",
      },
      {
        id: "materialdesign",
        label: "Material Design",
        link: "/icons-materialdesign",
        parentId: "icons",
      },
      {
        id: "fontawesome",
        label: "font Awesome",
        link: "/icons-fontawesome",
        parentId: "icons",
      },
      {
        id: "dripicons",
        label: "Drip آیکون های ",
        link: "/icon-dripicons",
        parentId: "icons",
      },
    ],
  },
  {
    id: "maps",
    novidade: false,
    label: "نقشه ها",
    icon: "mdi-map-marker-outline",
    link: "/#",
    subItems: [
      {
        id: 131,
        label: "نقشه گوگل",
        link: "/maps-google",
        parentId: "maps",
      },
      {
        id: 132,
        label: "نقشه وکتور",
        link: "/maps-vector",
        parentId: "maps",
      },
    ],
  },
  {
    id: "multilevel",
    novidade: false,
    label: "Multi Level",
    icon: "mdi-share-variant-outline",
    link: "/#",
    subItems: [
      {
        id: "level1.1",
        label: "مرحله 1.1",
        link: "/#",
        parentId: "multilevel",
      },
      {
        id: "level1.2",
        label: "مرحله 1.2",
        link: "/#",
        parentId: "multilevel",
        subItems: [
          {
            id: "level2.1",
            label: "مرحله 2.1",
            link: "/#",
            parentId: "level1.2",
          },
          {
            id: "level2.2",
            label: "مرحله 2.2",
            link: "/#",
            parentId: "level1.2",
          },
        ],
      },
    ],
  },
];
  
  export { menuItems };
  