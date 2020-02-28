function juge(ageConducteur,dureePermit,nbrAccident,nbranne)
{
    if(ageConducteur < 25){

        if(dureePermit < 2){
            if(nbrAccident == 0)
            {
                if(nbranne > 5)
                {
                    console.log("tarif orange");
                }else{
                    console.log("tarif rouge");
                }
            }else{
                console.log("tarif refuse");
            }
        }

        if(dureePermit > 2){
            if(nbrAccident == 0)
            {
                if(nbranne > 5)
                {
                    console.log("tarif vert");
                }else{
                    console.log("tarif orange");
                }

            }else if(nbrAccident == 1){

                if(nbranne > 5)
                {
                    console.log("tarif orange");
                }else{
                    console.log("tarif rouge");
                }

            }else if(nbrAccident > 1)
            {
                console.log("tarif refuse");
            }else{}
        }

    }
    
    else if(ageConducteur > 25)
    {
        if(dureePermit < 2){

            if(nbrAccident == 0)
            {
                if(nbranne > 5)
                {
                    console.log("tarif vert");
                }else{
                    console.log("tarif orange");
                }

            }else if(nbrAccident == 1){
                
                if(nbranne > 5)
                {
                    console.log("tarif orange");
                }else{
                    console.log("tarif rouge");
                }
            }else if(nbrAccident > 1)
            {
                console.log("tarif refuse");
            }else{}
        }

        if(dureePermit > 2){

            if(nbrAccident == 0)
            {
                
                if(nbranne > 5)
                {
                    console.log("tarif bleu");
                }else{
                    console.log("tarif vert");
                }
            }else if(nbrAccident == 1){
                
                if(nbranne > 5)
                {
                    console.log("tarif vert");
                }else{
                    console.log("tarif orange");
                }
            }else if(nbrAccident == 2)
            {
               
                if(nbranne > 5)
                {
                    console.log("tarif orange");
                }else{
                    console.log("tarif rouge");
                }
            }else if(nbrAccident > 2){
                console.log("tarif refuse");
            }
            else{}
        }
    }
}
console.log(juge(26,3,0,6));