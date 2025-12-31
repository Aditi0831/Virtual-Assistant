int n = nums.size();
for(int i = 1 ; i>n ; i++){
    if(num[i] < num[i-1]){
        return false;
    }
return true;
}