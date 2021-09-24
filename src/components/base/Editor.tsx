import React, { FunctionComponent } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import '@/styles/components/base/Editor.scss';

interface EditorProps {
    onChange: React.Dispatch<React.SetStateAction<string>>;
}


const Editor: FunctionComponent<EditorProps> = ({ onChange }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        onUpdate: (props) => {
            onChange(props.editor.getHTML());
        },
        content: '<p>Hello World!</p>',
    });

    return (
        <EditorContent editor={editor} />
    );
};

export default Editor;
