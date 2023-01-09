class GlassList{
    constructor(){
        this.list_of_glasses=[];
    }
    add_glass(glass_obj){
        this.list_of_glasses.push(glass_obj);
    }
    show_all_glasses(){
        let inner_html_content="";
        for(let item of this.list_of_glasses){
            inner_html_content+=`
            <div class="col-4 class_hover_format">
                <img class="img-fluid hover_opacity" onclick="try_on_glass_for_model(event)" src="${item.src}" data_id="${item.id}" alt="">
            </div>
            `
        }
        return inner_html_content;
    }
    find_glass_by_id(id){
        for(let glass_obj of this.list_of_glasses){
            if(glass_obj.id==id){
                return glass_obj;
            }
        }
        return null;
    }
}