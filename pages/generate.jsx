import { useState } from "react"
import {getOutline} from './api/summarize'
import { postData } from 'utils/helpers';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import LoadingDots from 'components/ui/LoadingDots';

const testString = "-Who were the Moors? -Where did they come from? -What religion did they practice? -What impact did they have on Spain and Europe? -How were they eventually defeated?"
const activeStyle = "group float-right relative w-1/5 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
const inactiveStyle = "group float-right relative w-1/5 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
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
            url: '/api/summarize',
            data: {prompt: prompt}
        });

        if (error) {
            console.log("HELP")
        }
        setLoading(false)
        setOutput(data[0].text)
    }

    return (
    <div className="flex align-items justify-center h-screen padding-to pt-5">
        <div className="w-3/5">
            <div className="text-slate-700 text-3xl text-center py-10">
                <h1>Create an outline, for an essay about...</h1>
            </div>
            <textarea
            onChange={(e) => setPrompt(e.target.value)}
            className="w-3/5 border-solid border-2 border-slate rounded-lg px-2 py-2"
            placeholder="who the Moors were.">
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
                Generate Outline
              </button>
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
        <textarea
        placeholder={testString}
        value={`${output}`}
        onChange={(e) => setOutput(e.target.value)}
        className="w-full h-full border-solid border-2 border-slate rounded-lg px-2 py-2"
        >
        </textarea>
        <button
            onClick={() => submitPrompt()}
            type="submit"
            disabled={true ? output === "" : false}
            className="group float-right relative w-1/5 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
        >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Save Outline
        </button>
    </div> 
    )
  }