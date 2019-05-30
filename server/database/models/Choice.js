module.exports = (sequelize, DataTypes) => {
	const Choice = sequelize.define(
		'Choice',
		{
			choiceid: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			roundid: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			boxnumber: { type: DataTypes.INTEGER },
			correct: { type: DataTypes.BOOLEAN }
		},
		{ tableName: 'audiocue_choice' }
	);

	return Choice;
};
