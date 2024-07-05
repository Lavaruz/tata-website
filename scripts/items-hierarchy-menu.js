$.contextMenu({
    selector: ".item-hierarchy",
    items: {
        add_div: {name: "Add Text", callback: function(key, opt){
            let newButton = prompt("masukan nama elemen")

            // Check if element name already exist
            let idExists = $('#root-hierarchy').find(`[id='h-${newButton}']`).length > 0;
            if (idExists) {
                let count = 1;
                while ($('#root-hierarchy').find(`[id='h-${newButton}-${count}']`).length > 0) {
                    count++;
                }
                newButton = `${newButton}-${count}`;
            }

            // Append to some div
            opt.$trigger.next().append(`
               <button id="h-${newButton}" class="item-hierarchy-text hover:bg-[#383838]/60 py-1 px-12 w-full text-left flex gap-2 items-center text-xs">${newButton}</button> 
            `)
            $("#ws-inspector").append(addInspector(newButton))
        }}
    }
});

function addInspector(element){
    return `
    <div id="i-${element}" class="py-4 hidden">
        <div class="flex items-center gap-2">
            <input type="checkbox" name="" id="" checked>
            <input placeholder="All" value="${element}" class="w-full bg-[#181818] rounded-md text-sm px-4 py-1" type="text" name="" id="">
        </div>

        <hr class="my-4 border-[#181818] border">

        
        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4 mb-2">
                <i class="uil uil-vector-square-alt"></i>
                <p class="text-sm font-medium">Transform</p>
            </div>
            <div class="grid grid-cols-6 gap-1 items-center">
                <p class="col-span-2 text-sm">Align</p>
                <select name="" id="" class="rounded-md w-full col-span-4 text-sm bg-[#181818] px-2 py-.5">
                    <option value="" selected>Left</option>
                    <option value="">Center</option>
                    <option value="">Right</option>
                </select>
            </div>
            <div class="grid grid-cols-6 gap-1 items-center">
                <p class="col-span-2 text-sm">Padding</p>
                <input type="number" class="bg-[#181818] rounded-md text-sm px-2 text-center" title="Top" placeholder="T" name="" id="pt">
                <input type="number" class="bg-[#181818] rounded-md text-sm px-2 text-center" title="Right" placeholder="R" name="" id="pr">
                <input type="number" class="bg-[#181818] rounded-md text-sm px-2 text-center" title="Bottom" placeholder="B" name="" id="pb">
                <input type="number" class="bg-[#181818] rounded-md text-sm px-2 text-center" title="Left" placeholder="L" name="" id="pl">
            </div>
            <div class="grid grid-cols-6 gap-1 items-center">
                <p class="col-span-2 text-sm">Margin</p>
                <input type="number" class="bg-[#181818] rounded-md text-sm px-2 text-center" title="Top" placeholder="T" name="" id="mt">
                <input type="number" class="bg-[#181818] rounded-md text-sm px-2 text-center" title="Right" placeholder="R" name="" id="mr">
                <input type="number" class="bg-[#181818] rounded-md text-sm px-2 text-center" title="Bottom" placeholder="B" name="" id="mb">
                <input type="number" class="bg-[#181818] rounded-md text-sm px-2 text-center" title="Left" placeholder="L" name="" id="ml">
            </div>
            
        </div>

        <hr class="my-4 border-[#181818] border">

        <!-- TEXT CONFIG -->
        <div class="flex flex-col gap-2 mb-2">
            <div class="flex items-center gap-4">
                <i class="uil uil-text-fields"></i>
                <p class="text-sm font-medium">Text</p>
            </div>
            <div class="grid grid-cols-6 gap-1 items-center">
                <p class="col-span-2 text-sm">Content</p>
                <textarea name="" rows="5" class="col-span-4 w-full rounded-md text-sm px-2 bg-[#181818]" id=""></textarea>
            </div>
            <div class="grid grid-cols-6 gap-1 items-center">
                <p class="col-span-2 text-sm">Font Family</p>
                <select name="" id="" class="rounded-md w-full col-span-4 text-sm bg-[#181818] px-2 py-.5">
                    <option value="" selected>Arial</option>
                    <option value="">Monserrat</option>
                    <option value="">Poppins</option>
                </select>
            </div>
            <div class="grid grid-cols-6 gap-1 items-center">
                <p class="col-span-2 text-sm">Font Weight</p>
                <select name="" id="" class="rounded-md w-full col-span-4 text-sm bg-[#181818] px-2 py-.5">
                    <option value="">Thin</option>
                    <option value="" selected>Normal</option>
                    <option value="">Medium</option>
                    <option value="">Semibold</option>
                    <option value="">Bold</option>
                </select>
            </div>
            <div class="grid grid-cols-6 gap-1 items-center">
                <p class="col-span-2 text-sm">Font Size</p>
                <input type="number" value="16" name="" id="" class="rounded-md w-full text-center text-sm bg-[#181818] px-2 py-.5"/>
                <p class="text-sm text-center">px</p>
            </div>
        </div>

        <hr class="my-4 border-[#181818] border">

        <!-- COLORS CONFIG -->
        <div class="flex flex-col gap-2 mb-2">
            <div class="flex items-center gap-4">
                <i class="uil uil-paint-tool"></i>
                <p class="text-sm font-medium">Colors</p>
            </div>
            <div class="grid grid-cols-6 gap-1 items-center">
                <p class="col-span-2 text-sm">Text color</p>
                <input type="color" class="bg-[#181818] rounded-md text-sm px-2 text-center col-span-4 w-full" value="#ffffff" title="" name="" id="color">
            </div>
        </div>

        <!-- <hr class="my-4 border-[#181818] border"> -->

        <!-- CUSTOMIZE CONFIG -->
        <!-- <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4 mb-2">
                <i class="uil uil-coffee"></i>
                <p class="text-sm font-medium">Customize</p>
            </div>
            <div class="grid grid-cols-6 gap-1 items-center">
                <p class="col-span-2 text-sm">Border</p>
                <select name="" id="" class="text-sm col-span-4 bg-[#181818] rounded-md px-2">
                    <option value="" selected>None</option>
                    <option value="">Small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                </select>
            </div>
            <div class="grid grid-cols-6 gap-1 items-center">
                <p class="col-span-2 text-sm">Shadow</p>
                <select name="" id="" class="text-sm col-span-4 bg-[#181818] rounded-md px-2">
                    <option value="" selected>None</option>
                    <option value="">Small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                </select>
            </div>
            
        </div> -->
    </div>
    `
}