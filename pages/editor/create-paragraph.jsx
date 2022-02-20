import { useState } from "react"
import {getOutline} from '../api/summarize'
import { postData } from 'utils/helpers';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import LoadingDots from 'components/ui/LoadingDots';

const test = `
-The Moors were an Islamic dynasty that ruled in Iberia (Spain and Portugal) from 711 to 1492. 
-They were a mix of Berbers from North Africa and Arabs from the Middle East. 
-Under Moorish rule, Iberia became a center of learning and culture, with Arabic becoming the dominant language. 
-The Moors were eventually overthrown by the Christian kingdoms of Spain.`

const essay = `
The Moors arrived in the Iberian Peninsula in 711 AD and quickly established control over most of the region. There are a number of reasons why the Moors settled in the Iberian Peninsula.

First, the Iberian Peninsula offered a number of advantages for settlement. The region enjoys a temperate climate with ample rainfall, making it an ideal location for agriculture. The peninsula is also well-positioned for trade, with easy access to the Mediterranean Sea. Finally, the region was home to a large number of Muslims prior to the arrival of the Moors, providing a ready-made Muslim population to which the Moors could assimilate.

Second, the Moors were looking for a new home after being driven out of their native North Africa by the Christian forces of Charles Martel. The Iberian Peninsula offered a hospitable home for the Moors and they were able to rapidly establish control over most of the region.

Third, the Moors were attracted to Iberia by its wealth. The region was home to a number of prosperous cities and civilizations, including the Visigoths, who had ruled Iberia for centuries. The Moors were able to plunder these cities and extract their wealth, helping to finance their conquest of the region.

Fourth, there were religious motivations behind the Moorish invasion of Iberia. The Moors were Muslims and they saw the Iberian Peninsula as a fertile ground for Islamic expansion. They believed that they could convert the indigenous Christian populations to Islam and establish a Muslim empire in Iberia.

Ultimately, there were a number of factors that contributed to the Moorish settlement of the Iberian Peninsula. The region offered a number of advantages for settlement, including a temperate climate, ample rainfall, and easy access to the Mediterranean Sea. The Moors were also motivated by religious and ideological factors, as well as by dreams of wealth and conquest. As a result, they were able to rapidly establish control over much of Iberia and create a powerful Muslim empire in the region.
`


export default function Example() {
    const [prompt, setPrompt] = useState("")
    const [output, setOutput] = useState("")
    const [isLoading, setLoading] = useState(false)

    const submitPrompt = async () => {
        if(prompt === "") {
            return "Please submit a topic before generating"
        }

        setLoading(true)

        const { data, error } = await postData({
            url: '/api/create-paragraph',
            data: {prompt: prompt}
        });

        if (error) {
            console.log("HELP")
        }

        setLoading(false)
        setOutput(data[0].text)
    }

    return (
        <>
        <div className="h-screen">
            <div class="bg-red h-2/5 grid grid-cols-8 gap-4">
                <div class="h-full">
                    
                </div>
                <div class="h-full col-span-3 pl-[10%]">
                    <div className="text-slate-700 text-3xl mt-10 pb-2">
                        <h1>Create a paragraph about</h1>
                    </div>
                    <textarea
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-4/5 ml-auto mr-auto display-block border-solid border-2 border-slate rounded-lg px-2 py-2"
                    placeholder="why did the Moors settle in the Iberian Peninsula?">
                    </textarea>
                    <button
                        onClick={() => submitPrompt()}
                        type="submit"
                        className="group my-3 relative w-1/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        </span>
                        Create Paragraph
                    </button>
                </div>
                <div class="h-full col-span-3">
                    <textarea
                    onChange={(e) => setOutput(e.target.value)}
                    value={output}
                    className="w-4/5 ml-[5%] mt-[5%] h-3/4 border-solid border-2 border-slate rounded-lg px-2 py-2"
                    placeholder={essay}>
                    </textarea>
                </div>
                <div class="h-full">

                </div>
            </div>
            <div class="bg-red h-3/5 grid grid-cols-8 gap-4">
                <div class="h-full">

                </div>
                <div class="h-full col-span-3 text-center">
                    <div className="text-slate-700 text-3xl pt-5 pb-2">
                        <h1>Outline Editor</h1>
                    </div>
                    <textarea
                    className="w-full h-3/4 border-solid border-2 border-slate rounded-lg px-2 py-2"
                    placeholder={test}>
                    </textarea>
                </div>
                <div class="h-full col-span-3 text-center">
                    <div className="text-slate-700 text-3xl pt-5 pb-2">
                        <h1>Essay Editor</h1>
                    </div>
                    <textarea
                    className="w-full h-3/4 border-solid border-2 border-slate rounded-lg px-2 py-2"
                    placeholder={essay}>
                    </textarea>
                    <button
                        onClick={() => submitPrompt()}
                        type="submit"
                        className="group my-3 relative w-1/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        </span>
                        Save Essay
                    </button>
                </div>
                <div class="h-full">

                </div>
            </div>
        </div>
        </>
    )
}



// export default function Example() {
//     const [prompt, setPrompt] = useState("")
//     const [output, setOutput] = useState("")
//     const [isLoading, setLoading] = useState(false)

//     const submitPrompt = async () => {
//         if(prompt === "") {
//             return "Please submit a topic before generating"
//         }

//         setLoading(true)

//         const { data, error } = await postData({
//             url: '/api/create-paragraph',
//             data: {prompt: prompt}
//         });

//         if (error) {
//             console.log("HELP")
//         }

//         setLoading(false)
//         setOutput(data[0].text)
//     }

//     console.log('prompt', prompt)

//     return (
//     <div className="flex align-items justify-center h-screen padding-to pt-5">
//         <div className="w-full">
            // <div className="text-slate-700 text-3xl py-10">
            //     <h1>Create a paragraph, about...</h1>
            // </div>
//             <textarea
//             onChange={(e) => setPrompt(e.target.value)}
//             className="w-2/6 border-solid border-2 border-slate rounded-lg px-2 py-2"
//             placeholder="how the economy of Germany was rebuilt after WW2.">
//             </textarea>
//             <div className="py-2">
//                 <span className="px-2 py-2 text-emerald-700">
//                     Need help <QuestionMarkCircleIcon className="h-5 inline"/>
//                 </span>
//             </div>
//             <div>
            //   <button
            //     onClick={() => submitPrompt()}
            //     type="submit"
            //     className="group my-3 relative w-1/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
            //   >
            //     <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            //     </span>
            //     Generate Paragraph
            //   </button>
//             </div>
//             {returnData(isLoading, output, setOutput)}
//         </div>
//     </div>
//     )
//   }

//   const returnData = (isLoading, output, setOutput) => {
//     if (isLoading) {
//         return <LoadingDots/> 
//     }

//     return (
//         <div className="w-full h-2/5">
        // <textarea
        // value=""
        // onChange={(e) => setOutput(e.target.value)}
        // className="w-1/3 h-full border-solid border-2 border-slate rounded-lg px-2 py-2"
        // >
        // </textarea>
//         <textarea
//         value={`${output}`}
//         onChange={(e) => setOutput(e.target.value)}
//         className="w-1/2 h-full border-solid border-2 border-slate rounded-lg px-2 py-2 mx-5"
//         >
//         </textarea>
//         <button
//             onClick={() => submitPrompt()}
//             type="submit"
//             disabled={true ? output === "" : false}
//             className="my-5 group float-right relative w-1/5 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
//         >
//             <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//             </span>
//             Save Essay
//         </button>
//     </div> 
//     )
//   }










            {/* <div class="bg-red grid grid-cols-4 gap-4">
                <div class="bg-red col-span-2">
                    <div>
                    <div className="w-4/5 col-span-2">
                        <div className="text-slate-700 text-3xl py-10">
                            <h1>Create a paragraph, about...</h1>
                        </div>
                        <textarea
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full border-solid border-2 border-slate rounded-lg px-2 py-2"
                        placeholder="how the economy of Germany was rebuilt after WW2.">
                        </textarea>
                        <div className="py-2">
                            <span className="px-2 py-2 text-emerald-700">
                                Need help <QuestionMarkCircleIcon className="h-5 inline"/>
                            </span>
                        </div>
                        <div>
                        <button
                            onClick={() => submitPrompt()}
                            type="submit"
                            className="group my-3 relative w-2/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            </span>
                            Generate Paragraph
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="bg-red col-span-2 h-full">
                <div>
                    <div className="w-4/5 h-full pt-10">
                        <textarea
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full border-solid border-2 border-slate rounded-lg px-2 py-2"
                        placeholder="how the economy of Germany was rebuilt after WW2.">
                        </textarea>
                        <div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="bg-red grid grid-cols-4 gap-4">
                <div class="bg-red col-span-2">
                    <div>
                    <div className="w-4/5 col-span-2">
                        <div className="text-slate-700 text-3xl py-10">
                            <h1>My Outline</h1>
                        </div>
                        <textarea
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full h-full border-solid border-2 border-slate rounded-lg px-2 py-2"
                        placeholder="how the economy of Germany was rebuilt after WW2.">
                        </textarea>
                        <div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="bg-red col-span-2">
                <div>
                    <div className="w-4/5 col-span-2">
                        <div className="text-slate-700 text-3xl py-10">
                            <h1>Create a paragraph, about...</h1>
                        </div>
                        <textarea
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full border-solid border-2 border-slate rounded-lg px-2 py-2"
                        placeholder="how the economy of Germany was rebuilt after WW2.">
                        </textarea>
                        <div className="py-2">
                            <span className="px-2 py-2 text-emerald-700">
                                Need help <QuestionMarkCircleIcon className="h-5 inline"/>
                            </span>
                        </div>
                        <div>
                        <button
                            onClick={() => submitPrompt()}
                            type="submit"
                            className="group my-3 relative w-1/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            </span>
                            Save Essay
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
*/}