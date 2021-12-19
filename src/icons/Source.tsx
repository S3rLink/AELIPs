import * as React from 'react'

function SvgSource(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      aria-label="Source"
      xmlns="https://www.w3.org/2000/svg"
      width={14}
      height={16}
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgSource)
export default ForwardRef
