     this.profileService.getProfileInfo().subscribe(profile => {
       console.log(profile);
       this.profile = profile;
     })
     this.profileService.getProfileRepos().subscribe(repos => {
       console.log(repos);
       this.repos = repos;
     })
