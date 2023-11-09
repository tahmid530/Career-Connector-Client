import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTab = () => {

    return (
        <div className='my-10'>
            <Tabs>
                <TabList>
                    <Tab>All Jobs</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                    <Tab>Title 4</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTab;