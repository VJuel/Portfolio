export default function FreelanceListItem({ title, children }) {
  return (
    <div className="flex justify-center items-center gap-2 lg:gap-4 [&>span]:text-[--text] lg:[&>span]:text-[--dark]">
      <div className="flex justify-center items-center rounded-lg bg-secondary p-2">
        {children}
      </div>
      <span className="font-semibold">{title}</span>
    </div>
  )
}
