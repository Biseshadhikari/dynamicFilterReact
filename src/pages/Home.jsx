import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [searchParams, setSearchParams] = useSearchParams({ subjects: "" });
    const [categorySubjects, setCategorySubjects] = useState("");
    const [category, setCategory] = useState(["noodles", "chowchow"]);
    const [categorydestination, setCategorydestination] = useState("");
    const [items, setItems] = useState([]);

    const subjects = searchParams.get('subjects');
    const destination = searchParams.get('destination');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (subjects){ 
                    const response = await axios.get('http://127.0.0.1:8000/api/items', {
                    params: { category: subjects }
                    });
                    console.log(response.data)
                    setItems(response.data);

                }
                else{ 
                    const response = await axios.get('http://127.0.0.1:8000/api/items'
                   );
                    console.log(response.data)
                    setItems(response.data);
                }
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [categorySubjects]);

    function handleCategory(e) {
        if (e.target.checked) {
            if (subjects) {
                const splitSubjects = subjects.split(',');

                if (!splitSubjects.includes(e.target.value)) {
                    const updatedSubjects = [...splitSubjects, e.target.value];
                    setCategorySubjects(updatedSubjects.join(','));
                    setSearchParams({ subjects: updatedSubjects.join(',') });
                }
            } else {
                setCategorySubjects(e.target.value);
                setSearchParams({ subjects: e.target.value });
            }

        } else {
            if (subjects) {
                const splitSubjects = subjects.split(',');
                const updatedSubjects = splitSubjects.filter(subject => subject !== e.target.value);
                setCategorySubjects(updatedSubjects.join(','));
                setSearchParams({ subjects: updatedSubjects.join(',') });
            }
        }
    }
    function handleDestination(e) {
        if (e.target.checked) {
            if (destination) {
                const splitDestination = destination.split(',');

                if (!splitDestination.includes(e.target.value)) {
                    const updatedSubjects = [...splitDestination, e.target.value];
                    setCategorySubjects(updatedSubjects.join(','));
                    setSearchParams({ subjects: updatedSubjects.join(',') });
                }
            } else {
                setCategorySubjects(e.target.value);
                setSearchParams({ subjects: e.target.value });
            }

        } else {
            if (subjects) {
                const splitSubjects = subjects.split(',');
                const updatedSubjects = splitSubjects.filter(subject => subject !== e.target.value);
                setCategorySubjects(updatedSubjects.join(','));
                setSearchParams({ subjects: updatedSubjects.join(',') });
            }
        }
    }

    return (
        <div>
            <section className="container mx-auto my-8 p-4 bg-white shadow-md rounded-md">
                <h2 className="text-lg font-semibold mb-4">Filter Courses</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Subject Filter */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Subjects</label>
                        {category.map((item, index) => (
                            <div key={index} className="flex flex-wrap">
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" value={item} onChange={handleCategory} />
                                    <span>{item}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto my-8 p-4 bg-white shadow-md rounded-md">
                <h2 className="text-lg font-semibold mb-4">Available Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {/* Course Card Example (Repeat as needed) */}
                    {items.map(item => (
                        <div key={item.id} className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                            <p className="text-sm text-gray-700 mb-4">{item.category}</p>
                            <p className="text-sm text-blue-500">destination: {item.destination} </p>
                            <a href="#" className="block mt-2 text-sm text-blue-500 hover:underline">
                                Learn more
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
