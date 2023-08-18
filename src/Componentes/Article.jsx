

export const Article = ({title, despcrition}) => {
  return (
    <div className=" h-[140px] border-b-2 last:border-none border-GrayishBlue py-3">
        <h2 className=" cursor-pointer hover:text-SoftOrange text-[17px] mb-2 font-bold" >{title}</h2>
        <p className=" text-[14px]">{despcrition}</p>
    </div>
  )
}
