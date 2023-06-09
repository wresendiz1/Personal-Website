// import React from 'react'

const classes = {
  "Elements of Software Design": true,
  "Database Design and Implementation": true,
  "Web Application Development": true,
  "Data Science for Business Applications": true,
  "Elements of Software Engineering I": true,
  "Elements of Software Engineering II": true,
  "Advanced Analytics Programming": true,
  "Technical Dimensions of Cybersecurity": true,
  "Business Systems Development": false,
};

function Coursework() {
  return (
    <>
      <div className="flex h-screen w-full justify-center">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="absolute top-36 mx-auto flex w-full flex-col md:w-3/4">
          <table className="rounded border-2 border-blue-300 dark:border-sky-800">
            <thead className="rounded border-4 border-blue-300 dark:border-sky-800">
              <tr className="dark:text-white">
                <th>Course Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(classes).map((courseName) => (
                <tr key={courseName}>
                  <td className="py-2 text-center font-medium dark:text-white">
                    {courseName}
                  </td>
                  <td className="py-2 text-center ">
                    <span
                      className={`inline-block rounded-full px-2 py-1 text-sm font-semibold ${
                        classes[courseName]
                          ? "bg-sky-400 text-white dark:text-black"
                          : "bg-red-500 text-white dark:text-black"
                      }`}
                    >
                      {classes[courseName] ? "Complete" : "Scheduled"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Coursework;
