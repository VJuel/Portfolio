export function Banner({ dict }) {
  return (
    <>
      <div className="border-t-2 border-black flex justify-center items-center absolute bottom-0 left-0 w-full h-fit py-2 px-2 lg:px-6 bg-secondary">
        <p className="text-lg text-black font-semibold">{dict.footer.banner}</p>
      </div>
    </>
  )
}
