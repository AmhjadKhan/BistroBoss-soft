

const Sectiontitle = ({subHeading,heading}) => {
  return (
    <div>
        <h3 className="text-yellow-500">---{subHeading}---</h3>
       <p className="text-4xl uppercase bordder-y-4 py-4">{heading}</p>
    </div>
  )
}

export default Sectiontitle
