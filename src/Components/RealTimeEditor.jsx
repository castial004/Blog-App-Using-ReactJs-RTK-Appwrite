import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, label, initialValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_EDITOR_KEY}
            initialValue={initialValue}
            init={{
              height: 500,
              plugins:
                "a11ychecker accordion advlist anchor autolink autosave charmap code codesample directionality emoticons exportpdf exportword fullscreen help image importcss importword insertdatetime link lists markdown math media nonbreaking pagebreak preview quickbars save searchreplace table visualblocks visualchars wordcount",
              toolbar:
                "undo redo | accordion accordionremove | importword exportword exportpdf | math | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent | forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
              menubar: "file edit view insert format tools table help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;

