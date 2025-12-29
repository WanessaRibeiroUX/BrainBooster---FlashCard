"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import { Link } from "@tiptap/extension-link";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Bold,
  Italic,
  Strikethrough,
  Underline,
  List,
  ListOrdered,
  Quote,
  Code,
  Undo,
  Redo,
  Link as LinkIcon,
  Image as ImageIcon,
  Palette,
  Highlighter,
} from "lucide-react";
import { useCallback, useState } from "react";

interface WysiwygEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  className?: string;
}

export function WysiwygEditor({
  content,
  onChange,
  placeholder = "Digite seu texto...",
  className = "",
}: WysiwygEditorProps) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg",
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: {
          class: "text-blue-500 underline cursor-pointer",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: {
          class: "fc-highlight",
        },
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-20 p-4 max-w-none",
      },
    },
  });

  const addImage = useCallback(() => {
    const url = window.prompt("URL da imagem:");
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const addLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL do link:", previousUrl);

    // cancelado
    if (url === null) return;

    // vazio: remove link
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    const { empty, from, to } = editor.state.selection;
    if (empty) {
      // Se não houver seleção, insere a URL como texto linkado
      editor
        .chain()
        .focus()
        .insertContent([
          {
            type: "text",
            text: url,
            marks: [{ type: "link", attrs: { href: url } }],
          },
        ])
        .run();
    } else {
      // Se houver seleção, aplica o link normalmente
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  }, [editor]);

  const colors = [
    "#000000",
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
  ];

  // Cores de highlight: claros e escuros juntos
  const highlightColors = [
    // Tons claros
    "#fef3c7",
    "#fce7f3",
    "#ede9fe",
    "#dbeafe",
    "#d1fae5",
    "#fed7e2",
    "#f3e8ff",
    "#e0e7ff",
    // Tons escuros
    "#78350f",
    "#831843",
    "#4c1d95",
    "#1e3a8a",
    "#064e3b",
    "#7c2d12",
    "#581c87",
    "#1e293b",
  ];

  if (!editor) {
    return null;
  }

  return (
    <div className={`border rounded-lg ${className}`}>
      {/* Toolbar */}
      <div className="border-b p-2 flex flex-wrap gap-1">
        {/* Undo/Redo */}
        <Button
          variant="ghost"
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <Undo className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <Redo className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-8" />

        {/* Text formatting */}
        <Button
          variant={editor.isActive("bold") ? "default" : "ghost"}
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("italic") ? "default" : "ghost"}
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("strike") ? "default" : "ghost"}
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("code") ? "default" : "ghost"}
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <Code className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-8" />

        {/* Lists */}
        <Button
          variant={editor.isActive("bulletList") ? "default" : "ghost"}
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("orderedList") ? "default" : "ghost"}
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("blockquote") ? "default" : "ghost"}
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-8" />

        {/* Media & Links */}
        <Button variant="ghost" size="sm" type="button" onClick={addLink}>
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" type="button" onClick={addImage}>
          <ImageIcon className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-8" />

        {/* Color picker */}
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={() => setShowColorPicker(!showColorPicker)}
          >
            <Palette className="h-4 w-4" />
          </Button>
          {showColorPicker && (
            <Card className="absolute top-10 left-0 z-50 p-2">
              <div className="grid grid-cols-4 gap-1">
                {colors.map((color) => (
                  <button
                    key={color}
                    className="w-6 h-6 rounded border-2 border-input hover:border-ring transition-colors"
                    style={{ backgroundColor: color }}
                    type="button"
                    onClick={() => {
                      editor.chain().focus().setColor(color).run();
                      setShowColorPicker(false);
                    }}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-2"
                type="button"
                onClick={() => {
                  editor.chain().focus().unsetColor().run();
                  setShowColorPicker(false);
                }}
              >
                Remover cor
              </Button>
            </Card>
          )}
        </div>

        {/* Highlight picker */}
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={() => setShowHighlightPicker(!showHighlightPicker)}
          >
            <Highlighter className="h-4 w-4" />
          </Button>
          {showHighlightPicker && (
            <Card className="absolute top-10 left-0 z-50 p-2">
              <div className="grid grid-cols-4 gap-1">
                {highlightColors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className="w-6 h-6 rounded border-2 border-input hover:border-ring transition-colors"
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      editor.chain().focus().toggleHighlight({ color }).run();
                      setShowHighlightPicker(false);
                    }}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                type="button"
                className="w-full mt-2"
                onClick={() => {
                  editor.chain().focus().unsetHighlight().run();
                  setShowHighlightPicker(false);
                }}
              >
                Remover destaque
              </Button>
            </Card>
          )}
        </div>
      </div>

      {/* Editor content */}
      <div className="min-h-20">
        <EditorContent editor={editor} />
      </div>

      {/* Click outside to close color pickers */}
      {(showColorPicker || showHighlightPicker) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowColorPicker(false);
            setShowHighlightPicker(false);
          }}
        />
      )}
    </div>
  );
}
