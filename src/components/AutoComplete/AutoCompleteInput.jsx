import { Combobox, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

const AutoCompleteInput = ({
    selected, setSelected, setQuery = () => { },
    query, data = [], placeholder = "", }) => {

    return (
        <div className={`w-full`}>
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full text-left  cursor-default ">
                        <Combobox.Input
                            className="w-full outline-none border border-gray-400   py-2 rounded pl-3 text-sm leading-5 text-gray-900  focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                            displayValue={(person) => person.name}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={placeholder}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {data.length === 0 && query !== '' ? (
                                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                data.map((item) => (
                                    <Combobox.Option
                                        key={item.id}
                                        className={({ active }) =>
                                            `cursor-pointer select-none relative py-2 pl-10 pr-4 ${active ? 'text-red-700 bg-teal-600' : 'text-gray-900'
                                            }`
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`flex flex-row items-center truncate ${selected ? 'font-medium text-red-700' : 'font-normal'
                                                        }`}
                                                >
                                                    {/* <img src={item.logoUrl} className="mr-2" /> */}
                                                    {item.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-black' : 'text-teal-600'
                                                            }`}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default AutoCompleteInput