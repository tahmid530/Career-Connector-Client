

const Glance = () => {
    return (
        <div className="my-12">
            <h3 className="text-5xl text-center font-bold py-10">At a Glance</h3>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl text-red-600 font-bold">
                    Career Connector
                </div>
                <div className="collapse-content text-2xl text-green-600 font-medium">
                    <p>Over 1 Million Successful Matches</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl text-red-600 font-bold">
                    Career Connector
                </div>
                <div className="collapse-content text-2xl text-green-600 font-medium">
                    <p>Average Time to Job Placement: 14 Days</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl text-red-600 font-bold">
                    Career Connector
                </div>
                <div className="collapse-content text-2xl text-green-600 font-medium">
                    <p>99% User Satisfaction Rate</p>
                </div>
            </div>
        </div>
    );
};

export default Glance;