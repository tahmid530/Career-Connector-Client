

const AddJob = () => {

    const handleJob = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const posting = form.posting.value;
        const image = form.image.value;

        const newJobs = { name, deadline, category, salary, description, posting, image }

        console.log(newJobs);
    }

    return (
        <div>
            <div className="bg-[#F4F3F0] px-24 py-12 my-5">
                <h2 className="text-3xl font-extrabold mb-8">Add a Job</h2>
                <form onSubmit={handleJob}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Job Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="deadline" placeholder="Application Deadline" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Job Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="salary" placeholder="Salary Range" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Job Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Job Posting</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="posting" placeholder="Job Posting Date" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Job" className="btn btn-outline w-full" />
                </form>
            </div>
        </div>
    );
};

export default AddJob;