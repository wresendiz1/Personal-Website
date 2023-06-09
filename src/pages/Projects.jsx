// import React from "react";
import Card from "../components/Card";
import bank from "../assets/bank.png";
import jobs from "../assets/jobs.png";
import analytics from "../assets/analytics.png";
const proj = {
  "Longhorn Banking": {
    ShortDesc: "Banking Web App",
    Description:
      "A web application that allows users to create an account, login, and perform basic banking functions such as deposit, withdraw, and transfer money.",
    Tools:
      "Developed using ASP.NET Core MVC, Entity Framework Core, and SQL Server. The application was deployed to Azure using Azure App Service.",
    Link: "https://longhornbanktrust.azurewebsites.net",
    Repo: "https://github.com/wresendiz1/LonghornBankWebApp",
    Image: bank,
  },
  JobsNMore: {
    ShortDesc: "Job Search Website",
    Description:
      "A job search and career advancement website. It simplifies job hunting by aggregating the latest job listings from multiple sources and provides valuable insights into the skills required for each job. In addition, JobsNMore also recommends relevant online courses to help job seekers acquire necessary skills and stand out from the competition.",
    Tools:
      "Developed using React, Node.js, Flask, and PostgresSQL. The application was deployed to GCP (Google Cloud Platform) using App Engine Flex.",
    Link: "https://jobs-n-more.uc.r.appspot.com/",
    Repo: "https://github.com/wresendiz1/JobsNMore",
    Image: jobs,
  },
  "Heart Disease Data Analysis": {
    ShortDesc: "Data Analysis",
    Description:
      "Analyzed a kaggle dataset with over 4000 records to identify the most significant predictors for heart disease.",
    Tools:
      "Leveraged statistical methods and data science libraries such as pandas, matplotlib, and scikit-learn to perform exploratory data analysis and build a predictive model.",
    Link: false,
    Repo: "https://github.com/wresendiz1/Heart-Disease-Analysis",
    Image: analytics,
  },
};

function Projects() {
  return (
    <>
      <div className="flex h-screen w-full justify-center">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="absolute top-36 mx-auto grid w-full grid-cols-1 place-items-center gap-8 md:w-3/4 md:grid-cols-2 lg:grid-cols-3">
          {Object.keys(proj).map((project, index) => (
            <div key={index} id={project}>
              <Card
                title={project}
                desc={proj[project].Description}
                tools={proj[project].Tools}
                image={proj[project].Image}
                shortDesc={proj[project].ShortDesc}
                link={proj[project].Link}
                repo={proj[project].Repo}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
