import { useLoaderData } from "react-router-dom";


const Apply = () => {
    const apply = useLoaderData();

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly pb-10 lg:my-20">

            <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20 px-6">
                {
                    apply.map(job => (

                        <div key={job._id} className="card w-full lg:w-96 border-2 border-black shadow-md mx-auto lg:mx-0">
                            <img src={job.image} alt="" className="rounded-xl w-[320px] mx-auto mt-10" />
                            <div className="card-body items-center text-center">

                                <h2 className="card-title text-[#444444] text-2xl font-bold">{job.name}</h2>
                                <h2 className="card-title text-[#444444]">Job Category: {job.category}</h2>
                                <h3 className="text-[#FF3811] text-xl font-semibold">Salary Range: {job.salary}</h3>
                                <h2 className="card-title text-[#444444]">Job Description: {job.description}</h2>
                                <h2 className="card-title text-[#444444]">Job Posting Date: {job.posting}</h2>
                                <h2 className="card-title text-[#444444]">Application Deadline: {job.deadline}</h2>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div >
    );
};

export default Apply;