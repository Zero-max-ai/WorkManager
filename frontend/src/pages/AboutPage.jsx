import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="h-full w-3/6 mx-auto flex flex-col items-center py-5">
        <h1 className="font-bold text-2xl">About WorkManager</h1>
        <div className="w-full text-xl">
          <p>
            Hi welcome to the <span className="text-red-500">WorkManager</span>.
            Here the WorkManager Application is made in the motivation of
            maintaining task of the user. WorkManger help it's users to maintain
            the task according to them with ease of drag & drop which makes
            things easy for user.
          </p>
          <p>
            WorkManager is made by - Zero-max-ai(Akshat Gangi Final Year BCA
            Student). This application is made in motivation of maintaining task
            by the setting priority and timelimit of tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
