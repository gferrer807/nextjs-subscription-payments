import { useState } from "react"
import {getOutline} from '../api/summarize'
import { postData } from 'utils/helpers';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import LoadingDots from 'components/ui/LoadingDots';
import TextArea from "../../components/editor/textareas/outLineInput";
import Button from "../../components/editor/buttons/Button";
import { ToastContainer, toast } from 'react-toastify';

const testString = "-Who were the Moors? -Where did they come from? -What religion did they practice? -What impact did they have on Spain and Europe? -How were they eventually defeated?"

export default function Example() {
    const [prompt, setPrompt] = useState("")
    const [output, setOutput] = useState("")
    const [isLoading, setLoading] = useState(false)

    console.log('prompt', prompt)

    const submitPrompt = async () => {
        // setLoading(true)

        console.log('prompt submit', prompt)

        const { data, error } = await postData({
            url: '/api/summarize',
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

        setLoading(false)
        setOutput(data[0].text)
    }

    return (
    <div className="flex align-items justify-center h-screen padding-to pt-5">
        <div className="w-3/5">
            <div className="text-slate-700 text-3xl text-center py-10">
                <h1>Create an outline, for an essay about...</h1>
            </div>
            <TextArea 
            onChange={setPrompt}
            className="w-3/5"
            placeholderText="who were the Moors?"
            />
            <div className="py-2">
                <span className="px-2 py-2 text-emerald-700">
                    Need help <QuestionMarkCircleIcon className="h-5 inline"/>
                </span>
            </div>
            <div>
                <Button
                onClick={() => submitPrompt()}
                text="Generate Outline"
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
            placeholderText={testString}
            value={`${output}`}
            onChange={(e) => setOutput(e.target.value)}
            className="w-full h-full"
            />
            <Button
            text="Save Outline"
            onClick={() => submitPrompt()}
            disabled={true ? output === "" : false}
            className="float-right relative w-1/5"
            />
    </div> 
    )
  }