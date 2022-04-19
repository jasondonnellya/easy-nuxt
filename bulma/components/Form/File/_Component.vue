<template>
    <File>
        <FileLabel>
            <FileInput name="resume" />
            <FileCta>
                <FileIcon>
                    <i class="fas fa-upload"></i>
                </FileIcon>
                <span class="file-label">
                    <slot></slot>
                </span>
            </FileCta>
        </FileLabel>
    </File>
</template>