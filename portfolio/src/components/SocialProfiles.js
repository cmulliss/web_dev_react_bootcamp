import React from 'react'
import SocialProfile from './SocialProfile'

import SOCIAL_PROFILES from '../data/socialProfilesData'

const SocialProfiles = () => (
  <div className="ui segment">
    <h2>Connect with me!</h2>
    <div className='ui three column grid'>
      {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => (
        <div>
          <div className='column'>
            <div className='segment'>
              <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default SocialProfiles
