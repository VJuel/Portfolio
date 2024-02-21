export function Banner({ text }) {
  return (
    <>
      <div className="border-t-2 border-black flex justify-center items-center w-full h-fit py-2 px-2 lg:px-6 bg-accent">
        <p className="text-lg text-black font-semibold">{text}</p>
      </div>
    </>
  )
}
