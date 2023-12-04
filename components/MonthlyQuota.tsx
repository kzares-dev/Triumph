const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function MonthlyQuota() {

  return (
    <div className='w-full'>
      <h1 className="text-[40px] font-mono font-semibold">Monthly Quota</h1>

      <div className="bg-white border shadow-sm rounded-md px-5 pt-10 pb-4 w-full overflow-auto">
        <ul className="flex flex-wrap gap-5 ">
          {months.map((month, monthIndex) => (
            <div className="font-mono px-3 py-1 bg-gray-50 border rounded-md relative group" key={month}>
              <span className="absolute px-4 py-1 bottom-[50%] bg-white z-[2] hidden group-hover:block w-[200px] font-semibold font-mono text-center rounded-sm border"> Month info </span>
              {month}
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MonthlyQuota
