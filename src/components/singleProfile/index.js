import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import ProfileHeader from '../../components/profileHeader/index';
import ProfileContent from '../../components/profileContent/index';
import HottestDiscussion from '../../components/hottestDiscussion/index';

class SingleProfile extends Component {
	render() {
		const { item } = this.props;
		const{ item: { additionalProfileInfo} } = this.props;

		return (
			<div>
				<ProfileHeader 
					image={item.image}
					name={item.name} 
					memberTime={item.memberTime}
					lastSeen={item.lastSeen}
					activityLevel={item.activityLevel}
				/>
				<ProfileContent 
					numberOfPeers={additionalProfileInfo.peers}
					numberOfDiscussion={additionalProfileInfo.discussions}
					numberOfFindings={additionalProfileInfo.findings}
					numberOfQuestions={additionalProfileInfo.questions}
				/>
				<HottestDiscussion 
					discussion={additionalProfileInfo.discussions}
					peers={additionalProfileInfo.peers}
					conversation={additionalProfileInfo.conversation}
					upvotes={additionalProfileInfo.upvotes}
				/>
			</div>
		);
	}
}

SingleProfile.propTypes = {
	item: PropTypes.array
};

export default SingleProfile;
