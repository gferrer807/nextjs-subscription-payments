import { useState } from "react"
import {getOutline} from '../api/summarize'
import { postData } from 'utils/helpers';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import LoadingDots from 'components/ui/LoadingDots';
import TextArea from "../../components/editor/textareas/outLineInput";
import Button from "../../components/editor/buttons/Button";
import { ToastContainer, toast } from 'react-toastify';

const testString = "Ask to write a paragraph, or start writing your own!"
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

    console.log('prompt', prompt)

    const submitPrompt = async () => {
        // setLoading(true)

        let promptValue = prompt

        const { data, error } = await postData({
            url: '/api/create-paragraph',
            data: {prompt: prompt}
        });
        // if (prompt) {
        //     console.log('yeww')
        //     toast.error('asdf', {
        //         position: "bottom-right",
        //         autoClose: 6000,
        //         hideProgressBar: true,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: false,
        //         progress: undefined,
        //     });
        // }

        let dataString = `${promptValue} ${data[0].text}`

        setLoading(false)
        setPrompt(dataString)
        // setOutput(data[0].text)
    }

    return (
    <div className="flex align-items justify-center h-screen padding-to pt-5">
        <div className="w-3/5">
            <div className="text-slate-700 text-3xl text-center py-10">
                <h1>Get to work bitch</h1>
            </div>
            <TextArea 
            onChange={setPrompt}
            value={prompt}
            className="w-3/5 h-1/6"
            placeholderText={testString}
            />
            <div className="py-2">
                <span className="px-2 py-2 text-emerald-700">
                    Need help <QuestionMarkCircleIcon className="h-5 inline"/>
                </span>
            </div>
            <div>
                <Button
                onClick={() => submitPrompt()}
                text="Generate Paragraph"
                />
            </div>
            {returnData(isLoading, output, setOutput)}
        </div>
    </div>
    )
  }

  const returnData = (isLoading, output, setOutput) => {
    if (isLoading) {
        return <LoadingDots/> 
    }

    return (
        <div className="w-full h-2/5">
            <TextArea 
            placeholderText={essay}
            onChange={setOutput}
            className="w-full h-full"
            />
            <Button
            text="Save Essay"
            onClick={() => submitPrompt()}
            disabled={true ? output === "" : false}
            className="float-right relative w-1/5"
            />
    </div> 
    )
  }