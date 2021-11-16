import React from "react";

const About = () => {
  return (
    <div className="container border shadow my-4">
      <div className="py-4">
        <h1 className = "my-4"> About this little movie app</h1>
        <p className="lead">
          I have tried to create an app which allows the users to watch list of movies on the dashboard.
          Here we can see movie title, movie Artists and movie Genre on the dashboard.

        </p>

        <p className="lead">
          User can create a new record of movies using Add movie button on dashboard/home page.
          Edit button allows editing action on a movie record.
          View button allows view action on a movie record.
          Added a delete functionality to delete a particular record based on id.
          Validations are added to Add new movie form.
        </p>
        <p className="lead">
          Create new option on the navbar provides two options 
          1. Create new artist and 2. Create new genre.
          Both the forms have post API integrated with it.

        </p>
        <p className="lead">
          App is a single page application with react routing integration.
          App has dynamic routing based on the id of the movie.
          All the paths are defined using react router and they are simply redirecting and not reloading 
          the page like conventional routing

        </p>
        {/* <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!</p> */}
      </div>
    </div>
  );
};

export default About;
