import { SVGProps } from "react";

export const ApproverBadge = ({
  fill,
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
    <path
      d="M14.146 1.794c1.034-1 2.674-1 3.708 0L19.02 2.92a2.667 2.667 0 0 0 2.227.724l1.604-.227a2.667 2.667 0 0 1 3 2.18l.28 1.595c.142.81.65 1.51 1.377 1.895l1.431.76a2.667 2.667 0 0 1 1.146 3.526l-.712 1.456a2.666 2.666 0 0 0 0 2.342l.712 1.456a2.667 2.667 0 0 1-1.146 3.526l-1.431.76a2.666 2.666 0 0 0-1.377 1.895l-.28 1.595a2.667 2.667 0 0 1-3 2.18l-1.604-.227a2.667 2.667 0 0 0-2.227.724l-1.165 1.126c-1.034 1-2.674 1-3.708 0L12.98 29.08a2.667 2.667 0 0 0-2.227-.724l-1.604.227a2.667 2.667 0 0 1-3-2.18l-.28-1.595a2.667 2.667 0 0 0-1.377-1.895l-1.431-.76a2.667 2.667 0 0 1-1.146-3.526l.712-1.456a2.667 2.667 0 0 0 0-2.342l-.712-1.456a2.667 2.667 0 0 1 1.146-3.526l1.431-.76A2.667 2.667 0 0 0 5.87 7.192l.28-1.595a2.667 2.667 0 0 1 3-2.18l1.604.227a2.667 2.667 0 0 0 2.228-.724l1.164-1.126Z"
      fill={fill}
    />
    <path
      d="M21.256 13.09a.833.833 0 1 0-1.179-1.18l-5.827 5.828-2.327-2.327a.833.833 0 0 0-1.179 1.178l2.917 2.917a.834.834 0 0 0 1.178 0l6.417-6.417Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);