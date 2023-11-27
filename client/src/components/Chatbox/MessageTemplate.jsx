import React from 'react'
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SiDependabot } from "react-icons/si";
import { HiUser } from "react-icons/hi2";

const MessageTemplate = ({ mode, text }) => {
    return (
        <div className={`rounded-md ${mode === "bot" ? "bg-[#444654]" : "bg-[#343541]"} px-48 h-fit flex gap-8  py-4`}>
            {
                mode === "bot" ? <SiDependabot size={32} className='text-gray-500 w-fit hover:text-gray-900 hover:cursor-pointer' /> : <HiUser size={32} className='text-gray-500 w-fit hover:text-gray-900 hover:cursor-pointer' />
            }
            <ReactMarkdown
                className='text-gray-300 w-full'
                children={text}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <>
                                <SyntaxHighlighter
                                    {...props}
                                    children={String(children).replace(/\n$/, '')}
                                    style={dracula}
                                    language={match[1]}
                                    customStyle={{
                                        padding: "25px"
                                    }}
                                    wrapLongLines="true"
                                />
                            </>
                        ) : (
                            <code {...props} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </div>
    )
}

export default MessageTemplate