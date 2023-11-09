import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Apply = () => {
    const jobs = useLoaderData();

    const handleApply = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const resume = form.resume.value;

        const applyJobs = { name, email, resume }
        console.log(applyJobs);

        
            // if (applyJobs.constructor === Object) {
            //     Swal.fire({
            //         title: 'Success!',
            //         text: 'Job Applied Successfully',
            //         icon: 'success',
            //         confirmButtonText: 'Cool'
            //     })
            // }
        }

        const handleApplied = jobs => {
                console.log(jobs);
        
                // const keysToRemove = ['_id'];
                // const modifiedData = { ...jobs };
                // keysToRemove.forEach(_id => delete modifiedData[_id]);
        
                fetch('https://assignment-11-server-fem6qw98y-tahmid530.vercel.app/apply', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(jobs)
                })
        
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Job Applied Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
            }
        
    

    return (
        <div className="my-8 ">
            <div className="bg-[#F4F3F0] px-24 py-12 my-5">
                <h2 className="text-3xl font-extrabold mb-8">Apply Job</h2>

                <form onSubmit={handleApply}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Resume</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="resume" placeholder="Your Resume Link" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Apply Job" onClick={() => handleApplied(jobs)} className="btn btn-outline w-full" />
                </form>
            </div >
        </div>
    );
};

export default Apply;