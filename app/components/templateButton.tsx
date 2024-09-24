"use client"; // Marcar o componente como Client Component

function actionButton() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

type TemplateButtonProps = {
    TextButton: string;
};

export default function TemplateButton({ TextButton }: TemplateButtonProps) {
    return (
        <button onClick={actionButton} className="bg-gray-950 border-4 text-slate-100 w-32 h-12 duration-300 hover:bg-slate-100 hover:border-gray-950 hover:text-slate-950">
            {TextButton} Share
        </button>
    );
}