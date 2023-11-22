

const Sectiontitle = ({subHeading,heading}) => {
  return (
    <div>
        <h3 className="text-yellow-500 text-4xl mt-6 uppercase">---{subHeading}---</h3>
       <p className="text-2xl bordder-y-4 py-4">{heading}</p>
    </div>
  )
}

export default Sectiontitle
