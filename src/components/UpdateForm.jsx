import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateForm = () => {
    const updateData = useLoaderData()

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const posting = form.posting.value;
        const image = form.image.value;

        const updateJobs = { name, deadline, category, salary, description, posting, image }
        console.log(updateJobs);

        fetch(`https://assignment-11-server-fem6qw98y-tahmid530.vercel.app/my_jobs/${updateData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateJobs)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Products Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div>
            <div className="bg-[#F4F3F0] px-24 py-12 my-5">
                <h2 className="text-3xl font-extrabold mb-8">Update Job</h2>
                <form onSubmit={handleUpdate}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={updateData?.name} placeholder="Job Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="deadline" defaultValue={updateData?.deadline} placeholder="Application Deadline" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" defaultValue={updateData?.category} placeholder="Job Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="salary" defaultValue={updateData?.salary} placeholder="Salary Range" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={updateData?.description} placeholder="Job Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Job Posting Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="posting" defaultValue={updateData?.posting} placeholder="Job Posting Date" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={updateData?.image} placeholder="Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Job" className="btn btn-outline w-full" />
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;