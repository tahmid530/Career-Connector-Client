import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AllJobs = () => {
    const myJobs = useLoaderData();
    const [updates, setUpdates] = useState(myJobs);

    const handleDelete = _id => {

        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {


                    fetch(`https://assignment-11-server-fem6qw98y-tahmid530.vercel.app/my_jobs/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Product has been deleted.',
                                    'success'
                                )
                                const remainingData = updates.filter(job => job._id !== _id);
                                setUpdates(remainingData);

                            }
                        })
                }
            })
        }

    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly pb-10 lg:my-20">

                <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20 px-6">
                    {
                        myJobs.map(job => (


                            <div key={job._id} className="card w-full lg:w-96 border-2 border-black shadow-md mx-auto lg:mx-0">
                                <img src={job.image} alt="" className="rounded-xl w-[320px] mx-auto mt-10" />
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-[#444444] text-2xl font-bold">{job.name}</h2>
                                    <h2 className="card-title text-[#444444]">Job Category: {job.category}</h2>
                                    <h2 className="card-title text-[#444444]">Job Description: {job.description}</h2>
                                    <h2 className="card-title text-[#444444]">Job Posting Date: {job.posting}</h2>
                                    <h2 className="card-title text-[#444444]">Application Deadline: {job.deadline}</h2>
                                    <h3 className="text-[#FF3811] text-xl font-semibold">Salary Range: ${job.salary}</h3>
                                </div>
                                <div className="flex justify-center gap-3 pb-5">
                                    <button className="btn btn-outline" onClick={() => handleDelete(job._id)}>Delete</button>
                                    <Link to={`/my_jobs/${job._id}`}><button className="btn btn-outline">Update</button></Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div >
        </div>
    );
};

export default AllJobs;