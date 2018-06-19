     this.profileService.getProfileInfo().subscribe(profile => {
       console.log(profile);
       this.profile = profile;
     })
